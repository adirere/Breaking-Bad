import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const AppearanceStats = ({ item }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 200;
    const height = 120;

    const xScale = d3
      .scaleBand()
      .domain([1, 2, 3, 4, 5])
      .range([0, width])
      .paddingInner(0.05);

    const yScale = d3
      .scaleLinear()
      .domain(item.appearance)
      .range([height, 0]);

    var xAxis = d3.axisBottom().scale(xScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", "translate(0," + (height + 15) + ")");

    svg
      .selectAll("rect")
      .data(item.appearance)
      .enter()
      .append("rect")
      .attr("x", (data, i) => xScale(data))
      .attr("y", "10")
      .attr("height", height)
      .attr("width", xScale.bandwidth())
      .attr("fill", "#0A4D3D");
  }, [item.appearance]);

  return (
    <div>
      <svg
        ref={svgRef}
        width="200"
        style={{ display: "block", margin: "auto", overflow: "visible" }}
      />
    </div>
  );
};

export default AppearanceStats;
