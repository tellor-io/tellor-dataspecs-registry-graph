import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DocumentHashUpdated } from "../generated/schema"
import { DocumentHashUpdated as DocumentHashUpdatedEvent } from "../generated/Contract/Contract"
import { handleDocumentHashUpdated } from "../src/contract"
import { createDocumentHashUpdatedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _queryType = "Example string value"
    let _documentHash = "Example string value"
    let newDocumentHashUpdatedEvent = createDocumentHashUpdatedEvent(
      _queryType,
      _documentHash
    )
    handleDocumentHashUpdated(newDocumentHashUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DocumentHashUpdated created and stored", () => {
    assert.entityCount("DocumentHashUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DocumentHashUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_queryType",
      "Example string value"
    )
    assert.fieldEquals(
      "DocumentHashUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_documentHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
