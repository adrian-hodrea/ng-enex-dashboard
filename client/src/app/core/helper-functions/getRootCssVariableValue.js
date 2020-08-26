const getRootCssVariableValue = (cssVar) => {
    let cssVarValue = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar);
    return cssVarValue;
}

export default getRootCssVariableValue;