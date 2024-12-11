/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.Enterprise;

import Business.Role.Role;
import Business.WorkQueue.InventoryDirectory;
import java.util.ArrayList;

/**
 *
 *  @author Hishita
 */

public class SuppliersEnterprise extends Enterprise {
    
    public SuppliersEnterprise(String name){
        super(name,Enterprise.EnterpriseType.Suppliers);
    }
    
    @Override
    public ArrayList<Role> getSupportedRole() {
        return null;
    }
}
