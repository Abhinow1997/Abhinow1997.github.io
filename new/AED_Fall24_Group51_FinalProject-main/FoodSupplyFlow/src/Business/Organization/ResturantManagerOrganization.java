/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Organization;

import Business.Role.Role;
import Business.Role.ResturantManagerRole;
import java.util.ArrayList;

/**
 *
 *  @author Anuj
 */

public class ResturantManagerOrganization extends Organization{
    
     public ResturantManagerOrganization() {
        super(Organization.Type.ResturantManagerOrganization.getValue());
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        ArrayList<Role> roles = new ArrayList();
        roles.add(new ResturantManagerRole());
        return roles;
    }
}
