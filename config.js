"use strict";

import fs from 'fs';

const dir   = './config';

export const app        = JSON.parse(fs.readFileSync(`${dir}/app.json`));
export const paths      = JSON.parse(fs.readFileSync(`${dir}/paths.json`));
export const routes     = JSON.parse(fs.readFileSync(`${dir}/routes.json`));
export const behance    = JSON.parse(fs.readFileSync(`${dir}/behance.json`));