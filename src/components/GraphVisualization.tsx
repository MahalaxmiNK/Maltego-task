import React, { useRef, useEffect } from "react";
import { ForceGraph2D, ForceGraphMethods } from "react-force-graph";
import { Graph } from "../models/graphModel";

interface GraphVisualizationProps {
  graph: Graph;
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ graph }) => {
  const fgRef = useRef<ForceGraphMethods | null>(null);

  useEffect(() => {
    // Recenter the view and stop engine simulation after stabilization
    const forceGraph = fgRef.current;
    if (forceGraph) {
      forceGraph.d3ReheatSimulation(); // Restart the simulation on graph updates
    }
  }, [graph]);

  return (
    <div className="graph-section" aria-label="Graph visualization">
      <ForceGraph2D
        ref={fgRef}
        graphData={{
          nodes: graph.data.nodes,
          links: graph.data.edges || [],
        }}
        height={580}
        width={780}
        nodeLabel={(node) => node.label}
        nodeColor={() => "#ffb30f"}
        linkColor={() => "#c1c3c7"}
        minZoom={1}
        maxZoom={4}
        cooldownTime={3000}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.9}
        onEngineStop={() => {
          if (fgRef.current) {
            fgRef.current.zoomToFit(400, 20);
          }
        }}
      />
    </div>
  );
};

export default GraphVisualization;