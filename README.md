# JupyterLite Demo

OpenLearn *Learn to Code for Data Analysis* notebooks via JupyterLite, deployed as a static site to GitHub Pages, for demo purposes.

*Experimental site for running notebooks associated with the Open University OpenLearn course [Learn to code for data analysis](https://www.open.edu/openlearn/science-maths-technology/learn-code-data-analysis/content-section-overview?active-tab=description-tab).*

## Try it in your browser

➡️ **https://github.com/ouseful-demos/learn-to-code-jupyterlite**

## Requirements

JupyterLite is being tested against modern web browsers:

- Firefox 90+
- Chromium 89+

## Usage

This repository is meant to demo how to deploy JupyterLite to GitHub Pages, using the released prebuilt JupyterLite assets.

A Github Action will create and deploy a JupyterLite environment seeded with notebooks found in the `content/` directory.

To deploy things locally:

- clone this repo;
- place your distribution notebooks in the `content` directory;
- run `./jupyterlite-install.sh` to grab and unpack a copy of the JupyterLite distribution;
- run `./deploy.sh` to create a manifest based on the notebooks you want to distribute and copy them to the correct location;
- run `python3 -m http.server 8111 -d dist/` to launch a simple webserver serving the idstribution (in the `dist/` folder) on a specified port (in this case, port `8111`);
- view the environment and run the notebook in your browser (eg using the previous webserver launch command, at: `localhost:8111`).

### Deploy a new version

In the JupyterLite installation script (`jupyterlite-install.sh`), update the version of JupyterLite:

https://github.com/ouseful-demos/learn-to-code-jupyterlite/blob/1328fd0701bb4aaaf4557410d83916bb79add9f7/jupyterlite-install.sh#L5

Add notebooks and supporting files into the `content/` directory.

Then commit and push the changes. The site will be deployed on the next push to the `main` branch.

## Cleaning md

*Ad hoc* script to tidy up markdown once it's produced:

```bash
# pip3 install mdformat mdformat-myst
# Format the markdown files
mdformat src
# Custom cleaning of markdown files
ou_xml_validator cleanmd PATH
# If it's simple markdown, transform to myst
jupytext --to myst src/*.md
# Add jupytext / myst header to markdown
# If there is a singlekernel available, it's name will be used
# If more than one kernel is available, use --kernel KERNELAME
jupyter-book myst init mymarkdownfile.md #--kernel kernelname
```

## Previewing locally

Use a simple http server:

`python3 -m http.server -b 127.0.0.1 -d PATH`