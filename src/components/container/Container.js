import React from "react";
import Articulo from "./articulos";

export default function Container() {
    return (
        <>
            <div class="w3-row-padding">
                <Articulo />
                <Articulo />
                <Articulo />
            </div>
            <div class="w3-row-padding">
                <Articulo />
                <Articulo />
                <Articulo />
            </div>
        </>
    );
}