// import dotenv from 'dotenv'; dotenv.config(); // process.env.EDIT_ME
import { _, __ } from './index.js';

const test = () => _({ key: 'value' });
const test2 = () => __('Verbose log message', { key: 'value' });

test();
test2();
