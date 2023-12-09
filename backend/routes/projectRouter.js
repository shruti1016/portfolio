import express from "express";
import ProjectData from "../data/projectData.js";
import Project from "../models/projectModel.js";
import expressAsyncHandler from "express-async-handler";

const projectRouter = express.Router();

projectRouter.post("/seed",
    expressAsyncHandler(async (req, res) => {
        await Project.deleteMany();
        const createProject = await Project.insertMany(ProjectData.project);
        res.send({ createProject });
    })
);

projectRouter.get("/:id",
    expressAsyncHandler(async (req, res) => {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.send(project)
        } else {
            res.status(404).send({ message: "Project Not Found" });
        }
    })
)

projectRouter.get("/",
expressAsyncHandler(async (req, res) => {
    const project = await Project.find();
    if (project) {
        res.send(project)
    } else {
        res.status(404).send({ message: "Project Not Found" });
    }
})
)


export default projectRouter;