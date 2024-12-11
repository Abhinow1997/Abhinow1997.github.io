/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.WorkQueue;

import Business.DB4OUtil.InventoryDB4OUtil;
import com.db4o.Db4oEmbedded;
import com.db4o.EmbeddedObjectContainer;
import com.db4o.ObjectContainer;
import com.db4o.ObjectSet;
import java.util.ArrayList;
import java.util.List;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Abhinav
 */
public class InventoryDirectory {
    
   public static ArrayList<Inventory> inventoryList  = new ArrayList<>();
   private static InventoryDirectory iDir = null;
   private static final String DB_FILE_1 = "inventoryDatabase1.db4o";
   private static final String DB_FILE_2 = "inventoryDatabase2.db4o";
   
   private InventoryDirectory newInventoryList;
     
   public InventoryDirectory() {
     //Empty
    } 
     
   public static InventoryDirectory getInstance() {
        if (iDir == null) {
            iDir = new InventoryDirectory();
            initializeDefaultData();
        }
        return iDir;
    }

   private static void initializeDefaultData() {
        inventoryList.clear();
        inventoryList.add(new Inventory("101", "Bread", "Bakery Products", "Available", 100));
        inventoryList.add(new Inventory("102", "Muffin", "Bakery Products", "Available", 100));
        inventoryList.add(new Inventory("103", "Cakes", "Bakery Products", "Available", 100));
        inventoryList.add(new Inventory("104", "Milk", "Dairy Products", "Available", 100));
        inventoryList.add(new Inventory("105", "Eggs", "Dairy Products", "Available", 100));
        inventoryList.add(new Inventory("106", "Butter", "Dairy Products", "Available", 100));
        inventoryList.add(new Inventory("107", "Chicken", "Meat Products", "Available", 100));
        inventoryList.add(new Inventory("108", "Turkey", "Meat Products", "Available", 100));
        inventoryList.add(new Inventory("109", "Ham", "Meat Products", "Available", 100));
        inventoryList.add(new Inventory("110", "Wheat", "Cereals", "Available", 100));
        inventoryList.add(new Inventory("111", "Rice", "Cereals", "Available", 100));
        inventoryList.add(new Inventory("112", "Oats", "Cereals", "Available", 100));
        inventoryList.add(new Inventory("113", "Tomatoes", "Vegetables", "Available", 100));
        inventoryList.add(new Inventory("114", "Potatoes", "Vegetables", "Available", 100));
        inventoryList.add(new Inventory("115", "Capsicum", "Vegetables", "Available", 100));
        inventoryList.add(new Inventory("116", "Banana", "Fruits", "Available", 100));
        inventoryList.add(new Inventory("117", "Orange", "Fruits", "Available", 100));
        inventoryList.add(new Inventory("118", "Apple", "Fruits", "Available", 100));
    }
   
        // Getters and Setters for Inventory List
    public static ArrayList<Inventory> getInventoryList() {
        if (iDir == null) {
            getInstance();
        }
        return inventoryList;
    }

    public static void setInventoryList(ArrayList<Inventory> newInventoryList) {
        inventoryList = newInventoryList;
        saveInventoryToDatabase();
    }

    public ArrayList<Inventory> getArrayUniqueList() {
        return inventoryList;
    }
    
    
    public static void saveInventoryToDatabase() {
        int instance=2;
        String dbFile = (instance == 1) ? DB_FILE_1 : DB_FILE_2;
        ObjectContainer db = null;
        try {
            // Open DB4O database
            db = Db4oEmbedded.openFile(Db4oEmbedded.newConfiguration(), dbFile);

            // Clear existing data in the DB4O
            ObjectSet<Inventory> result = db.query(Inventory.class);
            for (Inventory inv : result) {
                db.delete(inv);
            }

            // Save the updated inventory list
            for (Inventory inv : inventoryList) {
                db.store(inv);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (db != null) {
                db.close();
            }
        }
    }

    
    
}
