import { React } from "react";
import { ContentContent } from "./ContentContent";
import { ContentSearch } from "./ContentSearch";

export const Content = ()=>{
return(
    <div className="content-fluid Content col-sm-11 col-md-9">
        <ContentSearch />
        <ContentContent />
    </div>)}