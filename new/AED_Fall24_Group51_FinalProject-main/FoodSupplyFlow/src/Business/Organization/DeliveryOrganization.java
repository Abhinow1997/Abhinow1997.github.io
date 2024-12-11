/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Organization;

import Business.Role.Role;
import Business.Role.DeliveryRole;
import java.util.ArrayList;

/**
 *
 *  @author Anuj
 */


public class DeliveryOrganization extends Organization{
    
    public DeliveryOrganization() {
        super(Organization.Type.SupplierFoodOrganization.getValue());
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        ArrayList<Role> roles = new ArrayList();
        roles.add(new DeliveryRole());
        return roles;
    }
}
