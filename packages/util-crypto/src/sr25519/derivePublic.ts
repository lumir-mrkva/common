// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { assert, isU8a, u8aToU8a } from '@polkadot/util';
import { sr25519DerivePublicSoft } from '@polkadot/wasm-crypto';

export function sr25519DerivePublic (publicKey: HexString | Uint8Array | string, chainCode: Uint8Array): Uint8Array {
  const publicKeyU8a = u8aToU8a(publicKey);

  assert(isU8a(chainCode) && chainCode.length === 32, 'Invalid chainCode passed to derive');
  assert(publicKeyU8a.length === 32, () => `Invalid publicKey, received ${publicKeyU8a.length} bytes, expected 32`);

  return sr25519DerivePublicSoft(publicKeyU8a, chainCode);
}
