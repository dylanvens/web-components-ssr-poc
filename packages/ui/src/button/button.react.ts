"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { DBKButton } from "./button.component";

export const Button = createComponent({
  react: React,
  tagName: "dbk-button",
  elementClass: DBKButton,
});
