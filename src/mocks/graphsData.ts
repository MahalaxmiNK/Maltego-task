import { Graph } from "../models/graphModel";

export const graphs: Graph[] = [
  {
    id: "grph_1",
    name: "Graph 1",
    data: {
      nodes: [
        {
          id: "nd_1",
          label: "Node 1",
        },
        {
          id: "nd_2",
          label: "Node 2",
        },
        {
          id: "nd_3",
          label: "Node 3",
        },
        {
          id: "nd_4",
          label: "Node 4",
        },
      ],
      edges: [
        {
          source: "nd_1",
          target: "nd_2",
        },
        {
          source: "nd_1",
          target: "nd_3",
        },
        {
          source: "nd_1",
          target: "nd_4",
        },
      ],
    },
  },
  {
    id: "grph_2",
    name: "Graph 2",
    data: {
      nodes: [
        {
          id: "nd_1",
          label: "Node 1",
        },
        {
          id: "nd_2",
          label: "Node 2",
        },
      ],
      edges: [
        {
          source: "nd_1",
          target: "nd_2",
        },
      ],
    },
  },
  {
    id: "grph_3",
    name: "Graph 3",
    data: {
      nodes: [
        {
          id: "nd_1",
          label: "Node 1",
        },
        {
          id: "nd_2",
          label: "Node 2",
        },
        {
          id: "nd_3",
          label: "Node 3",
        },
        {
          id: "nd_4",
          label: "Node 4",
        },
        {
          id: "nd_5",
          label: "Node 5",
        },
        {
          id: "nd_6",
          label: "Node 6",
        },
      ],
      edges: [
        {
          source: "nd_1",
          target: "nd_2",
        },
        {
          source: "nd_1",
          target: "nd_3",
        },
        {
          source: "nd_1",
          target: "nd_4",
        },
        {
          source: "nd_1",
          target: "nd_5",
        },
      ],
    },
  },
];
