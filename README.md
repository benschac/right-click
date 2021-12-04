# right-click

Store NFT collection with its metadata on the perma-web or locally with a single click.

## Problem:

- JPEGs are stored on CDN’s.
- If the maintainer of a project stops paying for the CDN, your NFT will 404 :(
- Project meta-data might be stored off-chain too (explicit traits), additionally adding to the problem
- I might have 1000 NFT’s, clicking through each one and saving it would be painful user experience

## Solution

Original idea credit [nnnnicholas](https://twitter.com/nnnnicholas)
<img width="500" alt="Screen Shot 2021-12-04 at 2 48 34 PM" src="https://user-images.githubusercontent.com/2502947/144722722-b073deca-5951-4713-8014-4c9dc6b5966e.png">

- Users should be able to sign in with their Ethereum wallet, load their NFT collection
- Users should be shown which NFT’s metadata is or isn’t stored on the perma-web
- Users should have a clear CTA to download their metadata. Similarly to how F**\*b**k handles its data export

## Implementation

- Similar to how the [Hashmasks](https://thehashmasks.medium.com/on-permanence-of-the-hashmasks-artwork-50abd16baa55) have used Arweave to save metadata to the perma web.

## This client folder was generated with [CRA](https://github.com/facebook/create-react-app)
