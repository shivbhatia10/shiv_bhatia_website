export interface Project {
    name: string;
    slug: string;
    href: string;
    blurb: string;
    description: string;
    tags?: string[];
    featured?: boolean;
}

export const projects: Project[] = [
    {
        name: "date_time_formatter",
        slug: "date_time_formatter",
        href: "https://github.com/palantir/date-time-formatter-rs/",
        blurb: "Java time → Rust",
        description:
            "A port of the Java time library to Rust. Implements a complete parser and formatter for Java-style datetime pattern strings, handles resolution logic for inferring missing information, and interops with Chrono. Built as an open source library with Palantir.",
        tags: ["Rust", "Java"],
        featured: true,
    },
    {
        name: "apollos_garden",
        slug: "apollos_garden",
        href: "https://shivbhatia10.github.io/apollos_garden/",
        blurb: "Apollonian gasket, in GLSL",
        description:
            "A navigable render of the Apollonian gasket fractal. Uses raymarching and GLSL fragment shading.",
        tags: ["GLSL", "JavaScript"],
        featured: true,
    },
    {
        name: "dominion_rust",
        slug: "dominion_rust",
        href: "https://github.com/shivbhatia10/dominion-rust",
        blurb: "the card game, in Rust",
        description:
            "A Rust implementation of one of my favourite card games, Dominion.",
        tags: ["Rust"],
        featured: true,
    },
    {
        name: "wrist",
        slug: "wrist",
        href: "https://github.com/shivbhatia10/wrist",
        blurb: "fast shell-agnostic terminal history",
        description:
            "A fast, shell-agnostic terminal history application for macOS written in Rust.",
        tags: ["Rust"],
    },
    {
        name: "torch_sparse_autoencoder",
        slug: "torch_sparse_autoencoder",
        href: "https://github.com/shivbhatia10/torch_sparse_autoencoder",
        blurb: "minimal SAE library for PyTorch",
        description:
            "A minimal PyTorch library for handling sparse autoencoders for language/vision models. Designed to work for a wide range of model architectures while still providing a simple API.",
        tags: ["Python"],
    },
    {
        name: "advent_of_code_2024",
        slug: "advent_of_code_2024",
        href: "https://github.com/shivbhatia10/advent_of_code_2024",
        blurb: "AoC 2024 in OCaml",
        description:
            "My complete solutions to the Advent of Code 2024 challenges, written in OCaml.",
        tags: ["OCaml"],
    },
    {
        name: "boids",
        slug: "boids",
        href: "https://shivbhatia10.github.io/boids/",
        blurb: "boid sim in Rust + wasm",
        description:
            "A boid simulation written in Rust with macroquad targeting wasm.",
        tags: ["Rust"],
    },
    {
        name: "deto_x",
        slug: "deto_x",
        href: "https://github.com/shivbhatia10/deto_x",
        blurb: "LLM-powered tweet filter",
        description:
            "A Chrome extension that lets you filter out tweets with a custom prompt and LLMs.",
        tags: ["TypeScript"],
    },
    {
        name: "IR_spectra_CNN_classifier",
        slug: "ir_spectra_cnn",
        href: "https://github.com/shivbhatia10/IRSpectraToFunctionalGroupsCNN",
        blurb: "functional groups from IR spectra",
        description:
            "Using IR spectra data for organic compounds, we trained a CNN to predict the functional groups present in a molecule. The final model achieved an F1 score better than an average first-year chemistry student at Imperial.",
        tags: ["Python"],
    },
    {
        name: "tropical_expressivity_of_neural_networks",
        slug: "tropical_expressivity",
        href: "https://arxiv.org/abs/2405.20174",
        blurb: "paper, arXiv 2405.20174",
        description:
            "A paper I worked on exploring how tropical geometry can be used to derive information-theoretic properties of neural networks.",
        tags: ["ML", "interpretability"],
    },
    {
        name: "cellular_sheaf_generator",
        slug: "cellular_sheaf_generator",
        href: "https://github.com/shivbhatia10/CellularSheafGenerator",
        blurb: "random simplicial complexes",
        description:
            "Often in computational algebraic topology, it's useful to be able to randomly generate simplicial complexes of arbitrary dimension in a usable format for experiments. Working with a researcher at Imperial, I wrote a small library for this purpose, specifically tailored to persistent homology experiments for topological data analysis.",
        tags: ["Python"],
    },
    {
        name: "csvtui",
        slug: "csvtui",
        href: "https://github.com/shivbhatia10/csvtui",
        blurb: "vim-style CSV editor in the terminal",
        description:
            "A small Rust app that lets you view and edit CSV files from the terminal with vim-like keybindings. I use it as a daily metric tracker.",
        tags: ["Rust"],
    },
    {
        name: "WACC",
        slug: "wacc",
        href: "https://terencehernandez.com/files/WACC/WACCLangSpec.pdf",
        blurb: "compiler in Scala with parsley",
        description:
            "A compiler written in Scala with parsley for a variant of the While family of languages.",
        tags: ["Scala"],
    },
    {
        name: "pintos",
        slug: "pintos",
        href: "https://www.doc.ic.ac.uk/~mjw03/OSLab/pintos.pdf",
        blurb: "x86 OS in C",
        description:
            "An x86 operating system written in C with threads and user programs.",
        tags: ["C"],
    },
];
