/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Organization;

import Business.Role.QualityCheckRole;
import Business.Role.Role;
import java.util.ArrayList;

/**
 *
 *  @author Anuj
 */

public class QualityOrganization extends Organization{
   
     public QualityOrganization() {
        super(Organization.Type.QualityCheckFoodOrganization.getValue());
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        ArrayList<Role> roles = new ArrayList();
        roles.add(new QualityCheckRole());
        return roles;
    }
}
