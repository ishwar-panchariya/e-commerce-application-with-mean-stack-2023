import { Request, Response } from "express";
import { Category } from "../../models/category";
import mongoose from 'mongoose';

// save category
const createCategory = async (req: Request, res: Response) => {

    const data = req.body

    let newCategory
    try {
        newCategory = new Category(data)
        newCategory = await newCategory.save()

        res.status(201).json({ s: true, m: `${newCategory.name} category added successfully!`, d: newCategory })
    }
    catch(err) {
        res.status(500).json({ s: false, m: err.message })
    }
}

// get category list
const getCategoryList = async (req: Request, res: Response) => {

    const categories = await Category.find()
    
    if(!categories) {
        return res.status(500).json({ s: false, m: 'No categories found!' })
    }
    
    res.status(200).json({ s: true, m: `Categories List`, d: categories })
}

// get category list
const getCategoryById = async (req: Request, res: Response) => {

    const id = req.params.id

    const category = await Category.findById(id)
    
    if(!category) {
        return res.status(500).json({ s: false, m: 'Category with the given ID was not found!' })
    }
    
    res.status(200).json({ s: true, m: `Category`, d: category })
}

// update category by id
const updateCategory = async (req: Request, res: Response) => {

    const id = req.params.id
    const data = req.body
    
    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).send('Invalid Category Id')
    }

    const category = await Category.findByIdAndUpdate(id, data, { new : true })
    
    if(!category) {
        return res.status(500).json({ s: false, m: 'No category found!' })
    }
    
    res.status(200).json({ s: true, m: `Category is updated`, d: category })
}

// delete category by id
const deleteCategory = async (req: Request, res: Response) => {

    const id = req.params.id

    Category.findByIdAndRemove(id).then(category => {
        if(category) {
            return res.status(200).json({s: true, m: 'Category is deleted!'})
        } else {
            return res.status(404).json({s: true, m: 'Category not found!'})
        }
    }).catch((err) => { 
        return res.status(400).json({success: true, error: err})
    });
}

export { createCategory, getCategoryList, getCategoryById, updateCategory, deleteCategory }