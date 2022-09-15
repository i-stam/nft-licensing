//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {LicenseVersion, CantBeEvil} from "@a16z/contracts/licenses/CantBeEvil.sol";


contract LicensedNFT is ERC721("LicensedNFT","LNFT"), CantBeEvil(LicenseVersion.CBE_CC0) {

    constructor() {}

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, CantBeEvil) returns (bool) {
        return super.supportsInterface(interfaceId);
    }


}
