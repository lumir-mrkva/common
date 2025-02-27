// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '../bn/bn';
import type { HexString, NumberOptions, ToBigInt, ToBn } from '../types';

import { objectSpread } from '../object/spread';
import { u8aToHex } from '../u8a';
import { nToU8a } from './toU8a';

const ZERO_STR = '0x00';

/**
 * @name nToHex
 * @summary Creates a hex value from a bigint object.
 */
export function nToHex <ExtToBn extends ToBn | ToBigInt> (value?: ExtToBn | BN | bigint | number | null, options?: NumberOptions): HexString {
  return !value
    ? ZERO_STR
    : u8aToHex(
      nToU8a(value, objectSpread(
        // We spread here, the default for hex values is BE (JSONRPC via substrate)
        { isLe: false, isNegative: false },
        options
      ))
    );
}
