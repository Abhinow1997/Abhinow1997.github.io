/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Enterprise;

import Business.Role.Role;
import java.util.ArrayList;

/**
 *
 *  @author Hishita
 */

public class DeliveryEnterprise extends Enterprise{
    
    public DeliveryEnterprise(String name){
        super(name,Enterprise.EnterpriseType.Delivery);
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        return null;
    }
    
}
