/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package UserInterface.AdministrativeRole;

import Business.Enterprise.Enterprise;
import Business.Organization.SuppliersOrganization;
import Business.Organization.LogisticOrganization;
import Business.Organization.Organization;
import Business.Organization.Organization.Type;
import Business.Organization.OrganizationDirectory;
import Business.Organization.QualityOrganization;
import Business.Organization.ResturantManagerOrganization;
import Business.Organization.DeliveryOrganization;
import java.awt.CardLayout;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author db
 */
public class ManageOrganizationJPanel extends javax.swing.JPanel {

    /**
     * Creates new form ManageOrganizationJPanel
     */
    private JPanel userProcessContainer;
    private OrganizationDirectory organizationDirectory;
    private Enterprise enterprise;
    
    public ManageOrganizationJPanel(JPanel userProcessContainer, OrganizationDirectory organizationDirectory, Enterprise enterprise) {
        initComponents();
        this.userProcessContainer = userProcessContainer;
        this.organizationDirectory = organizationDirectory;
        this.enterprise = enterprise;
        populateTable();
        populateComboBox();
    }

   

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        tblOrganizations = new javax.swing.JTable();
        btnAddOrganization = new javax.swing.JButton();
        organizationJComboBox = new javax.swing.JComboBox();
        jLabel4 = new javax.swing.JLabel();
        btnBack = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();

        setBackground(new java.awt.Color(0, 51, 102));

        tblOrganizations.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "ID", "Name"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(tblOrganizations);

        btnAddOrganization.setFont(new java.awt.Font("Verdana", 1, 14)); // NOI18N
        btnAddOrganization.setText("Add Organization");
        btnAddOrganization.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAddOrganizationActionPerformed(evt);
            }
        });

        organizationJComboBox.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                organizationJComboBoxActionPerformed(evt);
            }
        });

        jLabel4.setFont(new java.awt.Font("Verdana", 1, 36)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(255, 255, 255));
        jLabel4.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel4.setText("List Of Organizations");

        btnBack.setFont(new java.awt.Font("Verdana", 1, 18)); // NOI18N
        btnBack.setText("Back");
        btnBack.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBackActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Verdana", 1, 18)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(255, 255, 255));
        jLabel2.setText("Organization Type");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jLabel4, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap(305, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jLabel2)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(organizationJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 505, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnAddOrganization, javax.swing.GroupLayout.PREFERRED_SIZE, 287, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(307, Short.MAX_VALUE))
            .addGroup(layout.createSequentialGroup()
                .addGap(67, 67, 67)
                .addComponent(btnBack, javax.swing.GroupLayout.PREFERRED_SIZE, 117, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(35, 35, 35)
                .addComponent(btnBack)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabel4)
                .addGap(62, 62, 62)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 110, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(38, 38, 38)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(organizationJComboBox, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(62, 62, 62)
                .addComponent(btnAddOrganization, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(134, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents

    private void btnAddOrganizationActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAddOrganizationActionPerformed

        Type type = (Type) organizationJComboBox.getSelectedItem();
        organizationDirectory.createOrganization(type);
        populateTable();

        JOptionPane.showMessageDialog(null, "Organization added successfully!");
    }//GEN-LAST:event_btnAddOrganizationActionPerformed
private void populateTable() {

        DefaultTableModel model = (DefaultTableModel) tblOrganizations.getModel();
        model.setRowCount(0);
        for (Organization organization : organizationDirectory.getOrganizationList()) {
            Object[] row = new Object[2];
            row[0] = organization.getOrganizationID();
            row[1] = organization.getName();

            model.addRow(row);
        }

    }
    private void organizationJComboBoxActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_organizationJComboBoxActionPerformed
       
    }//GEN-LAST:event_organizationJComboBoxActionPerformed
private void populateComboBox() {
        organizationJComboBox.removeAllItems();        
        
        if (enterprise.getEnterpriseType().getValue().equals(Enterprise.EnterpriseType.Logistic.getValue())) {
            organizationJComboBox.addItem(Organization.Type.LogisticOrganization);
        } else if (enterprise.getEnterpriseType().getValue().equals(Enterprise.EnterpriseType.ResturantManager.getValue())) {
            organizationJComboBox.addItem(Organization.Type.ResturantManagerOrganization);
        } else if (enterprise.getEnterpriseType().getValue().equals(Enterprise.EnterpriseType.Suppliers.getValue())) {
            organizationJComboBox.addItem(Organization.Type.SuppliersOrganization);
        } else if (enterprise.getEnterpriseType().getValue().equals(Enterprise.EnterpriseType.QualityCheck.getValue())) {
            organizationJComboBox.addItem(Organization.Type.QualityCheckFoodOrganization);
        } else if (enterprise.getEnterpriseType().getValue().equals(Enterprise.EnterpriseType.Delivery.getValue())) {
            organizationJComboBox.addItem(Organization.Type.SupplierFoodOrganization);
        }
}

    private void btnBackActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnBackActionPerformed

       userProcessContainer.remove(this);
        CardLayout layout = (CardLayout) userProcessContainer.getLayout();
        layout.previous(userProcessContainer);

    }//GEN-LAST:event_btnBackActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAddOrganization;
    private javax.swing.JButton btnBack;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JComboBox organizationJComboBox;
    private javax.swing.JTable tblOrganizations;
    // End of variables declaration//GEN-END:variables
}