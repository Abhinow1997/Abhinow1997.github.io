/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Business;

import Business.Employee.Employee;
import Business.Role.SystemAdminRole;
import Business.UserAccount.UserAccount;
import Business.WorkQueue.InventoryDirectory;

/**
 *
 *  @author Hishita
 */
public class ConfigureSystem {
    
    public static EcoSystem configure(){
    
     EcoSystem system = EcoSystem.getInstance();
     Employee employee = system.getEmployeeDirectory().createEmployee("sysadmin");
     UserAccount ua = system.getUserAccountDirectory().createUserAccount("sysadmin", "sysadmin", employee, new SystemAdminRole());
     return system;

    }
    
}
