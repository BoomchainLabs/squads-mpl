export type Txmeta = {
  "version": "0.1.0",
  "name": "txmeta",
  "instructions": [
    {
      "name": "trackMeta",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "meta",
          "type": "string"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "Signer is not a member of the specified multisig."
    },
    {
      "code": 6001,
      "name": "InvalidOwner",
      "msg": "The owner of the account is not the expected program."
    },
    {
      "code": 6002,
      "name": "InvalidTransaction",
      "msg": "The transaction is either not associated with the supplied multisig or it's creator is not the supplied signer"
    }
  ]
};

export const IDL: Txmeta = {
  "version": "0.1.0",
  "name": "txmeta",
  "instructions": [
    {
      "name": "trackMeta",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "meta",
          "type": "string"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "Signer is not a member of the specified multisig."
    },
    {
      "code": 6001,
      "name": "InvalidOwner",
      "msg": "The owner of the account is not the expected program."
    },
    {
      "code": 6002,
      "name": "InvalidTransaction",
      "msg": "The transaction is either not associated with the supplied multisig or it's creator is not the supplied signer"
    }
  ]
};
