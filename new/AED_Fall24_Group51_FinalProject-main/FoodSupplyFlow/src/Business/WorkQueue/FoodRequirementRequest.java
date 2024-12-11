/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.WorkQueue;

import java.util.ArrayList;

/**
 *
 * @author Abhinav
 * 
 */
public class FoodRequirementRequest extends WorkRequest{
     
    private String requestResult;
    private ArrayList<Products> productList;

    public ArrayList<Products> getSuppProductList() {
        return suppProductList;
    }

    public void setSuppProductList(ArrayList<Products> suppProductList) {
        this.suppProductList = suppProductList;
    }
    
    private ArrayList<Products> suppProductList;
    
    public FoodRequirementRequest(){
        super();
        this.productList= new ArrayList<>();
        this.suppProductList=new ArrayList<>();
    }

    public String getRequestResult() {
        return requestResult;
    }

    public void setRequestResult(String requestResult) {
        this.requestResult = requestResult;
    }

    public ArrayList<Products> getProductList() {
        return productList;
    }

    public void setProductList(ArrayList<Products> productList) {
        this.productList = productList;
    }
}
