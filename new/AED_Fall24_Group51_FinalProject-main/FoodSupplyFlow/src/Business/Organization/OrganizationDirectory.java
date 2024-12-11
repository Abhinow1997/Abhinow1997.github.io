/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.Organization;

import java.util.ArrayList;

/**
 *
 * @author Anuj
 */

public class OrganizationDirectory {
    
    private ArrayList<Organization> organizationList;

    public OrganizationDirectory() {
        organizationList = new ArrayList();
    }

    public ArrayList<Organization> getOrganizationList() {
        return organizationList;
    }
    
    public Organization createOrganization(Organization.Type type){
        Organization organization = null;
        if (type.getValue().equals(Organization.Type.LogisticOrganization.getValue())){
            organization = new LogisticOrganization();
            organizationList.add(organization);
        }
        else if (type.getValue().equals(Organization.Type.Admin.getValue())){
            organization = new AdminOrganization();
            organizationList.add(organization);
        }
        else if (type.getValue().equals(Organization.Type.ResturantManagerOrganization.getValue())){
            organization = new ResturantManagerOrganization();
            organizationList.add(organization);
        }
        else if (type.getValue().equals(Organization.Type.SuppliersOrganization.getValue())){
            organization = new SuppliersOrganization();
            organizationList.add(organization);
        }    
        else if (type.getValue().equals(Organization.Type.QualityCheckFoodOrganization.getValue())){
            organization = new QualityOrganization();
            organizationList.add(organization);
        }
        
        else if (type.getValue().equals(Organization.Type.SupplierFoodOrganization.getValue())){
            organization = new DeliveryOrganization();
            organizationList.add(organization);
        }    
        
        return organization;
    }
    
}
