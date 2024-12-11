/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Enterprise;

import Business.Role.Role;
import java.util.ArrayList;

/**
 *
 *  @author Abhinav
 */

public class ResturantManagerEnterprise extends Enterprise {
    
    public ResturantManagerEnterprise(String name){
        super(name,Enterprise.EnterpriseType.ResturantManager);
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        return null;
    }
}
