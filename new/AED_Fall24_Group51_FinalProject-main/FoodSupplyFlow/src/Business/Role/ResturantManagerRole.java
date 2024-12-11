/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Role;

import Business.EcoSystem;
import Business.Enterprise.Enterprise;
import Business.Organization.Organization;
import Business.Organization.ResturantManagerOrganization;
import Business.UserAccount.UserAccount;
import UserInterface.RestarantManagerRole.ResturantMangerWorkAreaJPanel;
import javax.swing.JPanel;

/**
 *
 * @author Abhinav
 */

public class ResturantManagerRole extends Role {
    
       @Override
    public JPanel createWorkArea(JPanel userProcessContainer, UserAccount account, Organization organization, Enterprise enterprise, EcoSystem business) {
        return new ResturantMangerWorkAreaJPanel(userProcessContainer, account, (ResturantManagerOrganization)organization, enterprise, business);
    }
    
}
