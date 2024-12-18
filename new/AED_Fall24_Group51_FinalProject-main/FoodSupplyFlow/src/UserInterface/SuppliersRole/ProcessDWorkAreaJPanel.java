/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package UserInterface.SuppliersRole;

import Business.EcoSystem;
import Business.Enterprise.Enterprise;
import Business.Enterprise.DeliveryEnterprise;
import Business.Network.Network;
import Business.Organization.Organization;
import Business.Organization.DeliveryOrganization;
import Business.UserAccount.UserAccount;
import Business.WorkQueue.FoodRequirementRequest;
import Business.WorkQueue.Inventory;
import Business.WorkQueue.InventoryDirectory;
import Business.WorkQueue.Products;
import java.awt.CardLayout;
import java.awt.Component;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Hishita
 */
public class ProcessDWorkAreaJPanel extends javax.swing.JPanel {

    /**
     * Creates new form ProcessDWorkAreaJPanel
     */
    private JPanel userProcessContainer;
    private FoodRequirementRequest request;
    private ArrayList<Inventory> inventoryList;
    private ArrayList<Products> productList;
    UserAccount userAccount;
    boolean flag1 = false;
    EcoSystem ecosystem;
    Boolean flagFood;
    Enterprise enterprise;
    HashMap<String, Integer> requiredProdMap = new HashMap<>();

   
   public ProcessDWorkAreaJPanel(JPanel userProcessContainer,UserAccount userAccount, FoodRequirementRequest requestFood, Enterprise enterprise) {
        initComponents();
        // InventoryDirectory.setInventoryList();
        this.userProcessContainer = userProcessContainer;
        this.request = requestFood;
        productList = request.getProductList();
        this.enterprise = enterprise;
        this.ecosystem = ecosystem;
        this.userAccount=userAccount;
        this.requiredProdMap = requiredProdMap;
    
        populateTable();

        populateInventory();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel3 = new javax.swing.JLabel();
        lblInventoryCount = new javax.swing.JLabel();
        submitJButton = new javax.swing.JButton();
        backJButton = new javax.swing.JButton();
        resultJTextField = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblInventory = new javax.swing.JTable();
        jComboBoxProductType = new javax.swing.JComboBox<>();
        jLabel4 = new javax.swing.JLabel();
        btnInventoryCount = new javax.swing.JButton();
        jScrollPane2 = new javax.swing.JScrollPane();
        tblProducts = new javax.swing.JTable();
        jLabel2 = new javax.swing.JLabel();
        btnProductType = new javax.swing.JButton();

        setBackground(new java.awt.Color(0, 51, 102));

        jLabel3.setFont(new java.awt.Font("Verdana", 1, 36)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(255, 255, 255));
        jLabel3.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel3.setText("Inventory Dashboard");

        lblInventoryCount.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        lblInventoryCount.setForeground(new java.awt.Color(255, 255, 255));
        lblInventoryCount.setText("0");

        submitJButton.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        submitJButton.setText("Approve Restaurants Request");
        submitJButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                submitJButtonActionPerformed(evt);
            }
        });

        backJButton.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        backJButton.setText("Back");
        backJButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                backJButtonActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Verdana", 1, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setText("Comments");

        tblInventory.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "Product ID", "Product Type", "Product Name", "Availablility ", "Units"
            }
        ));
        jScrollPane1.setViewportView(tblInventory);

        jComboBoxProductType.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));

        jLabel4.setFont(new java.awt.Font("Bodoni MT", 1, 14)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(255, 255, 255));
        jLabel4.setText("Filter");

        btnInventoryCount.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        btnInventoryCount.setText("Inventory Count");
        btnInventoryCount.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnInventoryCountActionPerformed(evt);
            }
        });

        tblProducts.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "Food Type", "Product", "Quantity"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane2.setViewportView(tblProducts);

        jLabel2.setFont(new java.awt.Font("Verdana", 1, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Process Request");

        btnProductType.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        btnProductType.setText("Product Type");
        btnProductType.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnProductTypeActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jLabel3, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jLabel2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(58, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(jLabel4)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jComboBoxProductType, javax.swing.GroupLayout.PREFERRED_SIZE, 102, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(btnProductType)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(btnInventoryCount)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblInventoryCount, javax.swing.GroupLayout.PREFERRED_SIZE, 104, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(backJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 113, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(1095, 1095, 1095))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 1060, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(69, 69, 69))))
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 1063, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                            .addGap(398, 398, 398)
                            .addComponent(jLabel1)
                            .addGap(18, 18, 18)
                            .addComponent(resultJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 379, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(layout.createSequentialGroup()
                            .addGap(924, 924, 924)
                            .addComponent(submitJButton))))
                .addGap(0, 0, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(16, 16, 16)
                .addComponent(backJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 33, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 12, Short.MAX_VALUE)
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 47, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 126, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel4, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jComboBoxProductType, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnProductType, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnInventoryCount, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(lblInventoryCount, javax.swing.GroupLayout.PREFERRED_SIZE, 26, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 32, Short.MAX_VALUE)
                .addComponent(jLabel3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 181, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(25, 25, 25)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(submitJButton, javax.swing.GroupLayout.DEFAULT_SIZE, 33, Short.MAX_VALUE)
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(resultJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 25, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(66, 66, 66))
        );
    }// </editor-fold>//GEN-END:initComponents

    private void submitJButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_submitJButtonActionPerformed

        // Approve the request and update its status
        resultJTextField.setText("Approved");
        request.setRequestResult(resultJTextField.getText());
        request.setStatus("Supplier Approved");

        // Create a map for quick inventory lookups by product name
        Map<String, Inventory> inventoryMap = new HashMap<>();
        for (Inventory inSupp : InventoryDirectory.getInventoryList()) {
            inventoryMap.put(inSupp.getProductName().toLowerCase(), inSupp);
        }
        // Process each product in the request
        for (Products prod : productList) {
            String productName = prod.getProductName().toLowerCase();
            if (inventoryMap.containsKey(productName)) {
                Inventory inSupp = inventoryMap.get(productName);

                // Check and update inventory if sufficient stock exists
                if (prod.getQuantity() <= inSupp.getQuantity()) {
                    inSupp.setQuantity(inSupp.getQuantity() - prod.getQuantity());
                } else {
                    JOptionPane.showMessageDialog(null, 
                        "Insufficient stock for product: " + prod.getProductName());
                }
            } else {
                JOptionPane.showMessageDialog(null, 
                    "Product not found in inventory: " + prod.getProductName());
            }
        }

        JOptionPane.showMessageDialog(null, "Request Approved Successfully!");
        populateInventory();
    }//GEN-LAST:event_submitJButtonActionPerformed
   public void populateTable() {

        DefaultTableModel model = (DefaultTableModel) tblProducts.getModel();

        model.setRowCount(0);

        productList = ((FoodRequirementRequest) request).getProductList();
        if (productList != null) {
            for (Products p : productList) {
                Object row[] = new Object[3];
                row[0] = p;
                row[1] = p.getProductName();
                row[2] = p.getQuantity();
                model.addRow(row);
            }
        }
    }

    private void populateInventory() {

        inventoryList = InventoryDirectory.getInventoryList();
        DefaultTableModel model1 = (DefaultTableModel) tblInventory.getModel();
        model1.setRowCount(0);
        for (Inventory p : inventoryList) {
            Object row[] = new Object[5];
            row[0] = p;
            row[1] = p.getProductType();
            row[2] = p.getProductName();
            row[3] = p.getAvailability();
            row[4] = p.getQuantity();

            model1.addRow(row);

        }
        Set<String> set = new HashSet<String>();
        for (Inventory c : InventoryDirectory.getInventoryList()) {
            set.add(c.getProductType());
        }
        jComboBoxProductType.removeAllItems();

        for (String a : set) {
            jComboBoxProductType.addItem(a);
        }
    }

    private void backJButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_backJButtonActionPerformed

        userProcessContainer.remove(this);
        Component[] componentArray = userProcessContainer.getComponents();
        Component component = componentArray[componentArray.length - 1];
        SuppliersWorkAreaJPanel dwjp = (SuppliersWorkAreaJPanel) component;
        dwjp.populateTable();
        CardLayout layout = (CardLayout) userProcessContainer.getLayout();
        layout.previous(userProcessContainer);
    }//GEN-LAST:event_backJButtonActionPerformed

    private void btnInventoryCountActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnInventoryCountActionPerformed

        int counter = 0;
        for (Inventory i : inventoryList) {

            counter = counter + i.getQuantity();

        }

        lblInventoryCount.setText(Integer.toString(counter));

    }//GEN-LAST:event_btnInventoryCountActionPerformed

    private void btnProductTypeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnProductTypeActionPerformed

        ArrayList<Inventory> inv = new ArrayList<>();

        for (Inventory f : InventoryDirectory.getInventoryList()) {

            if (f.getProductType().equalsIgnoreCase((String) this.jComboBoxProductType.getSelectedItem())) {
                inv.add(f);
            }
        }
        if (inv.isEmpty()) {
            JOptionPane.showMessageDialog(null, "Empty List");
        }

        DefaultTableModel dtm = (DefaultTableModel) tblInventory.getModel();
        dtm.setRowCount(0);

        for (Inventory p : inv) {
            Object row[] = new Object[5];
            row[0] = p;
            row[1] = p.getProductType();
            row[2] = p.getProductName();
            row[3] = p.getAvailability();
            row[4] = p.getQuantity();

            dtm.addRow(row);

        }
    }//GEN-LAST:event_btnProductTypeActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton backJButton;
    private javax.swing.JButton btnInventoryCount;
    private javax.swing.JButton btnProductType;
    private javax.swing.JComboBox<String> jComboBoxProductType;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JLabel lblInventoryCount;
    private javax.swing.JTextField resultJTextField;
    private javax.swing.JButton submitJButton;
    private javax.swing.JTable tblInventory;
    private javax.swing.JTable tblProducts;
    // End of variables declaration//GEN-END:variables
}
