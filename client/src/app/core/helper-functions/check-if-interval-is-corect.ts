const checkIfIntervalIsCorect = (fdt,tdt) => {
    let fromDate = new Date(fdt);
    let toDate = new Date(tdt);
    return (fromDate < toDate); 
}
export { checkIfIntervalIsCorect }