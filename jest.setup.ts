import "@testing-library/jest-dom";
import "@emotion/jest";
import "@emotion/react";
import "@emotion/styled";
import { matchers } from "@emotion/jest";
import * as dotenv from "dotenv";

expect.extend(matchers);

dotenv.config({ path: ".env.test" });
