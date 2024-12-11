/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Organization;

import Business.Role.SuppliersRole;
import Business.Role.Role;
import java.util.ArrayList;

/**
 *
 * @author Anuj
 */

public class SuppliersOrganization extends Organization{
 
     public SuppliersOrganization() {
        super(Organization.Type.SuppliersOrganization.getValue());
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        ArrayList<Role> roles = new ArrayList();
        roles.add(new SuppliersRole());
        return roles;
    }
}
