import React from "react";
import { registerIcons } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";

export default class IconSetupHelpers {
    static initializeIcons() {
        initializeIcons();

        registerIcons({
            icons: {
                // https://iconcloud.design/home/search/camera/Full%20MDL2%20Assets/Full%20MDL2%20Assets/eb35
                SecurityCamera: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="1em" height="1em">
                        <path
                            fill="currentColor"
                            d="M1833 925l-71-18-234 469-632-158v702H0v-128h768v-606l-128-32v510H0v-128h512v-414L50 1007q57-224 112-446t111-446l1747 437-187 373zM366 271l-36 146 1413 354-13 54 13-54 21 5 70-139L366 271zm1269 605L299 542l-93 371 1253 314 176-351z"
                        />
                    </svg>
                ),
                // https://iconcloud.design/home/search/IOT/Full%20MDL2%20Assets/Full%20MDL2%20Assets/f22c
                IOT: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="1em" height="1em">
                        <path
                            fill="currentColor"
                            d="M1792 896q53 0 99 20t82 55 55 81 20 100q0 53-20 99t-55 82-81 55-100 20q-50 0-94-18t-78-49-57-74-26-93l-150-25q-24 69-71 124t-112 90l58 174q5-1 9-1t9 0q53 0 99 20t82 55 55 81 20 100q0 53-20 99t-55 82-81 55-100 20q-53 0-99-20t-82-55-55-81-20-100q0-66 31-123t86-92l-58-174q-14 2-29 3t-30 2q-92 0-173-41t-137-116l-208 103q6 27 6 54 0 53-20 99t-55 82-81 55-100 20q-53 0-99-20t-82-55-55-81-20-100q0-53 20-99t55-82 81-55 100-20q56 0 106 23t87 65l208-104q-17-56-17-112 0-71 25-137t73-119L617 617q-51 23-105 23-53 0-99-20t-82-55-55-81-20-100q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100q0 85-51 153l120 151q43-23 90-35t97-13q83 0 157 33l164-246q-31-35-48-79t-17-92q0-53 20-99t55-82 81-55 100-20q53 0 99 20t82 55 55 81 20 100q0 53-20 99t-55 82-81 55-100 20q-42 0-84-14l-165 247q58 54 89 126t32 152l150 25q15-34 39-62t55-48 66-31 74-11zm-256-768q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10zM256 1536q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10zm1152 256q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50zM384 384q0 27 10 50t27 40 41 28 50 10q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50zm640 896q53 0 99-20t82-55 55-81 20-100q0-53-20-99t-55-82-81-55-100-20q-53 0-99 20t-82 55-55 81-20 100q0 53 20 99t55 82 81 55 100 20zm768 0q27 0 50-10t40-27 28-41 10-50q0-27-10-50t-27-40-41-28-50-10q-27 0-50 10t-40 27-28 41-10 50q0 27 10 50t27 40 41 28 50 10z"
                        />
                    </svg>
                )
            }
        });
    }
}
