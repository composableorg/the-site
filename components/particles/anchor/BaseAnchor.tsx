import React from "react";

export interface BaseAnchorProps {
    anchorText : string
};

export const BaseAnchor = ({ anchorText, ...props}: BaseAnchorProps) => (
    <a {...props}>{anchorText}</a>
);
