package Business.DB4OUtil;

import Business.ConfigureSystem;
import Business.EcoSystem;
import Business.WorkQueue.Inventory;
import Business.WorkQueue.InventoryDirectory;
import com.db4o.Db4oEmbedded;
import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import com.db4o.config.EmbeddedConfiguration;
import com.db4o.ta.TransparentPersistenceSupport;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class InventoryDB4OUtil {

    private static InventoryDB4OUtil inventoryDB4OUtil;

    private static final String FILENAME = Paths.get("D:\\Inventory.db4o").toAbsolutePath().toString();

    // Singleton instance
    public synchronized static InventoryDB4OUtil getInstance() {
        if (inventoryDB4OUtil == null) {
            inventoryDB4OUtil = new InventoryDB4OUtil();
        }
        return inventoryDB4OUtil;
    }

    // Create a connection to a specific database file
    private ObjectContainer createConnection(String fileName) {
        try {
            EmbeddedConfiguration config = Db4oEmbedded.newConfiguration();
            config.common().add(new TransparentPersistenceSupport());
            config.common().activationDepth(Integer.MAX_VALUE);
            config.common().updateDepth(Integer.MAX_VALUE);
            config.common().objectClass(EcoSystem.class).cascadeOnUpdate(true);
            config.common().objectClass(InventoryDirectory.class).cascadeOnUpdate(true);
            return Db4oEmbedded.openFile(config, fileName);
        } catch (Exception ex) {
            System.out.print(ex.getMessage());
        }
        return null;
    }

    // Generic method to store an object
    public synchronized void storeObject(Object object, String fileName) {
        ObjectContainer conn = createConnection(fileName);
        if (conn != null) {
            conn.store(object);
            conn.commit();
            conn.close();
        }
    }

    // Generic method to retrieve the last object of a specific type
    public <T> T retrieveLastObject(Class<T> clazz, String fileName) {
        ObjectContainer conn = createConnection(fileName);
        T result = null;
        if (conn != null) {
            ObjectSet<T> objects = conn.query(clazz);
            if (!objects.isEmpty()) {
                result = objects.get(objects.size() - 1);
            }
            conn.close();
        }
        return result;
    }

    // Specialized method for EcoSystem retrieval
    public EcoSystem retrieveEcoSystem() {
        EcoSystem system = retrieveLastObject(EcoSystem.class, FILENAME);
        if (system == null) {
            system = ConfigureSystem.configure();
        }
        return system;
    }

    // Retrieve all Inventory objects
    public List<Inventory> retrieveAllObjects() {
        ObjectContainer db = null;
        List<Inventory> inventoryList = new ArrayList<>();
        try {
            db = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(), FILENAME);
            ObjectSet<Inventory> result = db.query(Inventory.class);
            inventoryList.addAll(result);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (db != null) {
                db.close();
            }
        }
        return inventoryList;
    }
}
