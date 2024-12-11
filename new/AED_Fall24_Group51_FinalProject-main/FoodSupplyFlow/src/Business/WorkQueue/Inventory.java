/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Business.WorkQueue;

import java.util.Date;

/**
 *
 * @author Abhinav
 */
public class Inventory {

    private String productID;
    private String productName;
    private String productType;
    private String availability;
    private int quantity;

    private static Date date = new Date();

    public static Date getDate() {
        return date;
    }

    public static void setDate() {
        date = new Date();
    }

    public Inventory(String productID, String productName, String productType, String availability, int quantity) {
        this.productID = productID;
        this.productName = productName;
        this.productType = productType;
        this.availability = availability;
        this.quantity = quantity;
    }

    public String getProductID() {
        return productID;
    }

    public void setProductID(String productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return this.productID;
    }
}