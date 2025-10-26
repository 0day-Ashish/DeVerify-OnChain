// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title DeverifyBadge — simple ERC721 with tokenURI storage
/// @notice Public mint allowed. Change to `onlyOwner` on `mint` if you want server-only minting.
contract DeverifyBadge is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    event Minted(address indexed to, uint256 indexed tokenId, string tokenURI);

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
        _nextTokenId = 1;
    }

    /// @notice Mint a new badge to `to` with metadata `tokenURI`
    /// @dev Remove `onlyOwner` if you want open minting. Add `onlyOwner` if backend mints.
    function mint(address to, string calldata tokenURI) external returns (uint256) {
        uint256 tokenId = _nextTokenId;
        _nextTokenId = _nextTokenId + 1;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);

        emit Minted(to, tokenId, tokenURI);
        return tokenId;
    }
}
