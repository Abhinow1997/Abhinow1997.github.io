/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JPanel.java to edit this template
 */
package UserInterface.QualityCheckRole;

import Business.EcoSystem;
import Business.Enterprise.DeliveryEnterprise;
import Business.Enterprise.Enterprise;
import Business.Network.Network;
import Business.Organization.DeliveryOrganization;
import Business.Organization.LogisticOrganization;
import Business.Organization.Organization;
import Business.Organization.QualityOrganization;
import Business.UserAccount.UserAccount;
import Business.WorkQueue.FoodRequirementRequest;
import Business.WorkQueue.Products;
import Business.WorkQueue.WorkRequest;
import java.awt.CardLayout;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Hishita
 */
public class QualityCheckWorkAreaJPanel extends javax.swing.JPanel {

    /**
     * Creates new form QualityCheckWorkAreaJPanel
     */
    private JPanel userProcessContainer;
    private EcoSystem business;
    private UserAccount userAccount;
    private Enterprise enterprise;
    private LogisticOrganization ngoOrganization;
    private QualityOrganization qualityOrganization;
    
     //Organization organization,Enterprise enterprise, EcoSystem business
    //JPanel userProcessContainer, UserAccount account, QualityOrganization qualityOrganization, Enterprise enterprise
    
    public QualityCheckWorkAreaJPanel(JPanel userProcessContainer, UserAccount account, QualityOrganization qualityOrganization, Enterprise enterprise, EcoSystem business) {
        initComponents();
        this.userProcessContainer = userProcessContainer;
        this.userAccount = account;
        this.business = business;
        this.enterprise=enterprise;
        this.qualityOrganization = (QualityOrganization)qualityOrganization;
        populateTable();
    }

    public void populateTable() {
        
        DefaultTableModel model = (DefaultTableModel)workRequestJTable.getModel();
        model.setRowCount(0);
        for( WorkRequest request : qualityOrganization.getWorkQueue().getWorkRequestList())
        {
            Object[] row = new Object[4];
            row[0] = request;
            row[1] = request.getSender().getEmployee().getName();
            row[2] = request.getReceiver() == null ? null : request.getReceiver().getEmployee().getName();
            row[3] = request.getStatus();
            
            model.addRow(row);
        }
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel2 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        workRequestJTable = new javax.swing.JTable();
        jScrollPane2 = new javax.swing.JScrollPane();
        tblProducts = new javax.swing.JTable();
        jLabel1 = new javax.swing.JLabel();
        showProductBtn = new javax.swing.JButton();
        processJButton = new javax.swing.JButton();
        refreshJButton = new javax.swing.JButton();
        assignJButton = new javax.swing.JButton();
        btnSendtoDistributor = new javax.swing.JButton();

        setBackground(new java.awt.Color(0, 51, 102));

        jLabel2.setFont(new java.awt.Font("Verdana", 1, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Order Cart");

        workRequestJTable.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "Message", "Sender", "Receiver", "Status"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Object.class, java.lang.String.class, java.lang.String.class, java.lang.String.class
            };
            boolean[] canEdit = new boolean [] {
                false, true, true, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(workRequestJTable);

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

        jLabel1.setFont(new java.awt.Font("Verdana", 1, 36)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("Quality Check Work Area");

        showProductBtn.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        showProductBtn.setText("Display Products");
        showProductBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                showProductBtnActionPerformed(evt);
            }
        });

        processJButton.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        processJButton.setText("Process Work Request");
        processJButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                processJButtonActionPerformed(evt);
            }
        });

        refreshJButton.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        refreshJButton.setText("Refresh Table");
        refreshJButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                refreshJButtonActionPerformed(evt);
            }
        });

        assignJButton.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        assignJButton.setText("Assign Work Request");
        assignJButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                assignJButtonActionPerformed(evt);
            }
        });

        btnSendtoDistributor.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        btnSendtoDistributor.setText("Clear for Delivery");
        btnSendtoDistributor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSendtoDistributorActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jLabel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 66, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 939, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, Short.MAX_VALUE))
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(jScrollPane2)
                                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                                        .addComponent(refreshJButton)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(assignJButton)
                                        .addGap(34, 34, 34)
                                        .addComponent(processJButton)
                                        .addGap(54, 54, 54)
                                        .addComponent(btnSendtoDistributor, javax.swing.GroupLayout.PREFERRED_SIZE, 201, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                                        .addComponent(showProductBtn)
                                        .addGap(348, 348, 348)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 78, Short.MAX_VALUE)))))
                .addContainerGap())
        );

        layout.linkSize(javax.swing.SwingConstants.HORIZONTAL, new java.awt.Component[] {assignJButton, btnSendtoDistributor, processJButton, refreshJButton, showProductBtn});

        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(33, 33, 33)
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 210, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(27, 27, 27)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnSendtoDistributor, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(processJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(assignJButton, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(refreshJButton))
                .addGap(18, 18, 18)
                .addComponent(jLabel2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 59, Short.MAX_VALUE)
                .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 195, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(showProductBtn)
                .addGap(42, 42, 42))
        );

        layout.linkSize(javax.swing.SwingConstants.VERTICAL, new java.awt.Component[] {assignJButton, btnSendtoDistributor, processJButton, refreshJButton, showProductBtn});

    }// </editor-fold>//GEN-END:initComponents

    private void showProductBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_showProductBtnActionPerformed

        int selectedRow = workRequestJTable.getSelectedRow();
        if (selectedRow < 0){
            JOptionPane.showMessageDialog(null, "Please select a request");
        }

        DefaultTableModel model = (DefaultTableModel) tblProducts.getModel();
        model.setRowCount(0);model.setRowCount(0);
        
        FoodRequirementRequest request = (FoodRequirementRequest)workRequestJTable.getValueAt(selectedRow, 0);

        // for (WorkRequest request1 : userAccount.getWorkQueue().getWorkRequestList())
        // {
            //  if (request1=request)
            //{
                ArrayList<Products> productList = ((FoodRequirementRequest) request).getProductList();
                if (productList!=null){
                    for (Products p : productList) {
                        Object row[] = new Object[3];
                        row[0] = p;
                        row[1] = p.getProductName();
                        row[2] = p.getQuantity();
                        model.addRow(row);
                        //((DefaultTableModel) tblProducts.getModel()).addRow(row);
                    }
                }
                // }
            // }
    }//GEN-LAST:event_showProductBtnActionPerformed

    private void processJButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_processJButtonActionPerformed

        int selectedRow = workRequestJTable.getSelectedRow();

        if (selectedRow < 0) {
            JOptionPane.showMessageDialog(null, "Please select a request!", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }
        
        FoodRequirementRequest request = (FoodRequirementRequest)workRequestJTable.getValueAt(selectedRow, 0);

        if (request.getStatus().equalsIgnoreCase("Sent to QC")) {
            JOptionPane.showMessageDialog(null, "Please assign the request", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }
        if (request.getReceiver().equals(userAccount) && (request.getStatus().equalsIgnoreCase("QC Pending") )){
            request.setStatus("QC Done");
            ProcessQWorkRequestJPanel processWorkRequestJPanel = new ProcessQWorkRequestJPanel(userProcessContainer, request);
            userProcessContainer.add("processWorkRequestJPanel", processWorkRequestJPanel);
            CardLayout layout = (CardLayout) userProcessContainer.getLayout();
            layout.next(userProcessContainer);
        }        
        else if(request.getStatus().equalsIgnoreCase("Ready for Delivery")){
            JOptionPane.showMessageDialog(null, "Request already approved!", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }
        else {
            JOptionPane.showMessageDialog(null, "WorkRequest cannot be processed as it is " + request.getStatus(), "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }
    }//GEN-LAST:event_processJButtonActionPerformed

    private void refreshJButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_refreshJButtonActionPerformed
        populateTable();
        JOptionPane.showMessageDialog(null, "Requests Updated!");
    }//GEN-LAST:event_refreshJButtonActionPerformed

    private void assignJButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_assignJButtonActionPerformed

        int selectedRow = workRequestJTable.getSelectedRow();

        if (selectedRow < 0) {
            JOptionPane.showMessageDialog(null, "Please select a request!", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }

        WorkRequest request = (WorkRequest)workRequestJTable.getValueAt(selectedRow, 0);

        if(request.getStatus().equalsIgnoreCase("Sent to QC"))
        {
            if(request.getReceiver()==null){
                request.setReceiver(userAccount);
            }

            request.setStatus("QC Pending");
            populateTable();
        }

    }//GEN-LAST:event_assignJButtonActionPerformed

    private void btnSendtoDistributorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSendtoDistributorActionPerformed

        int selectedRow = workRequestJTable.getSelectedRow();

        if (selectedRow < 0) {
            JOptionPane.showMessageDialog(null, "Please select a request");
            return;
        }

        FoodRequirementRequest distrequest = (FoodRequirementRequest) workRequestJTable.getValueAt(selectedRow, 0);

        if (distrequest.getStatus().equalsIgnoreCase("Rejected")) {

            JOptionPane.showMessageDialog(null, "Order was rejected!", "Warning", JOptionPane.WARNING_MESSAGE);
            return;
        }

        if ((distrequest.getStatus().equalsIgnoreCase("Sent to QC")) || (distrequest.getStatus().equalsIgnoreCase("QC Processing"))){
            JOptionPane.showMessageDialog(null, "Order needs QC approval");
            return;
        }

        if(distrequest.getReceiver()==userAccount && (distrequest.getStatus().equalsIgnoreCase("QC Approved")) ){
            distrequest.setReceiver(null);
            distrequest.setMessage(distrequest.getMessage());
            distrequest.setSender(userAccount);
            distrequest.setStatus("Ready for Delivery");
            JOptionPane.showMessageDialog(null, "WorkRequest has been been updated successfully!");
        }
        else { JOptionPane.showMessageDialog(null, "Order needs QC approval"); }

        for (Network n : business.getNetworkList()) {

            for (Enterprise e : n.getEnterpriseDirectory().getEnterpriseList()) {

                if (e instanceof DeliveryEnterprise) {

                    Organization org = null;
                    for (Organization organization : e.getOrganizationDirectory().getOrganizationList()) {
                        if (organization instanceof DeliveryOrganization) {
                            org = organization;
                            break;
                        }
                    }
                    if (org != null) {

                        org.getWorkQueue().getWorkRequestList().add(distrequest);
                        userAccount.getWorkQueue().getWorkRequestList().add(distrequest);
                    }
                }
            }
        }
    }//GEN-LAST:event_btnSendtoDistributorActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton assignJButton;
    private javax.swing.JButton btnSendtoDistributor;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JButton processJButton;
    private javax.swing.JButton refreshJButton;
    private javax.swing.JButton showProductBtn;
    private javax.swing.JTable tblProducts;
    private javax.swing.JTable workRequestJTable;
    // End of variables declaration//GEN-END:variables
}