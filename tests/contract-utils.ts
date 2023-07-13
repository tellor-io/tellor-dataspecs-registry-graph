import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DocumentHashUpdated,
  ManagerUpdated,
  NewRegistration,
  OwnerUpdated,
  RegistrationExtended,
  TellorAddressUpdated
} from "../generated/Contract/Contract"

export function createDocumentHashUpdatedEvent(
  _queryType: string,
  _documentHash: string
): DocumentHashUpdated {
  let documentHashUpdatedEvent = changetype<DocumentHashUpdated>(newMockEvent())

  documentHashUpdatedEvent.parameters = new Array()

  documentHashUpdatedEvent.parameters.push(
    new ethereum.EventParam("_queryType", ethereum.Value.fromString(_queryType))
  )
  documentHashUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_documentHash",
      ethereum.Value.fromString(_documentHash)
    )
  )

  return documentHashUpdatedEvent
}

export function createManagerUpdatedEvent(
  _queryType: string,
  _manager: Address
): ManagerUpdated {
  let managerUpdatedEvent = changetype<ManagerUpdated>(newMockEvent())

  managerUpdatedEvent.parameters = new Array()

  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("_queryType", ethereum.Value.fromString(_queryType))
  )
  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("_manager", ethereum.Value.fromAddress(_manager))
  )

  return managerUpdatedEvent
}

export function createNewRegistrationEvent(
  _queryType: string,
  _owner: Address,
  _expirationTime: BigInt
): NewRegistration {
  let newRegistrationEvent = changetype<NewRegistration>(newMockEvent())

  newRegistrationEvent.parameters = new Array()

  newRegistrationEvent.parameters.push(
    new ethereum.EventParam("_queryType", ethereum.Value.fromString(_queryType))
  )
  newRegistrationEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  newRegistrationEvent.parameters.push(
    new ethereum.EventParam(
      "_expirationTime",
      ethereum.Value.fromUnsignedBigInt(_expirationTime)
    )
  )

  return newRegistrationEvent
}

export function createOwnerUpdatedEvent(
  _queryType: string,
  _owner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("_queryType", ethereum.Value.fromString(_queryType))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )

  return ownerUpdatedEvent
}

export function createRegistrationExtendedEvent(
  _queryType: string,
  _expirationTime: BigInt
): RegistrationExtended {
  let registrationExtendedEvent = changetype<RegistrationExtended>(
    newMockEvent()
  )

  registrationExtendedEvent.parameters = new Array()

  registrationExtendedEvent.parameters.push(
    new ethereum.EventParam("_queryType", ethereum.Value.fromString(_queryType))
  )
  registrationExtendedEvent.parameters.push(
    new ethereum.EventParam(
      "_expirationTime",
      ethereum.Value.fromUnsignedBigInt(_expirationTime)
    )
  )

  return registrationExtendedEvent
}

export function createTellorAddressUpdatedEvent(
  _tellorAddress: Address
): TellorAddressUpdated {
  let tellorAddressUpdatedEvent = changetype<TellorAddressUpdated>(
    newMockEvent()
  )

  tellorAddressUpdatedEvent.parameters = new Array()

  tellorAddressUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tellorAddress",
      ethereum.Value.fromAddress(_tellorAddress)
    )
  )

  return tellorAddressUpdatedEvent
}
