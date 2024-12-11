/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Role;

import Business.EcoSystem;
import Business.Enterprise.Enterprise;
import Business.Organization.LogisticOrganization;
import Business.Organization.Organization;
import Business.Organization.QualityOrganization;
import Business.UserAccount.UserAccount;
import UserInterface.Logistics.LogisticsWorkAreaJPanel;
import UserInterface.QualityCheckRole.QualityCheckWorkAreaJPanel;
import javax.swing.JPanel;

/**
 *
 * @author Hishita
 */

public class LogisticRole extends Role {
    
    @Override
    public JPanel createWorkArea(JPanel userProcessContainer, UserAccount account, Organization organization, Enterprise enterprise, EcoSystem business) {
        return new LogisticsWorkAreaJPanel(userProcessContainer, account, (LogisticOrganization)organization,enterprise, business);
    }
    
}
