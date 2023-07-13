import {
  DocumentHashUpdated as DocumentHashUpdatedEvent,
  ManagerUpdated as ManagerUpdatedEvent,
  NewRegistration as NewRegistrationEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  RegistrationExtended as RegistrationExtendedEvent,
  TellorAddressUpdated as TellorAddressUpdatedEvent
} from "../generated/Contract/Contract"
import {
  DocumentHashUpdated,
  ManagerUpdated,
  NewRegistration,
  OwnerUpdated,
  RegistrationExtended,
  TellorAddressUpdated
} from "../generated/schema"

export function handleDocumentHashUpdated(
  event: DocumentHashUpdatedEvent
): void {
  let entity = new DocumentHashUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryType = event.params._queryType
  entity._documentHash = event.params._documentHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerUpdated(event: ManagerUpdatedEvent): void {
  let entity = new ManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryType = event.params._queryType
  entity._manager = event.params._manager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewRegistration(event: NewRegistrationEvent): void {
  let entity = new NewRegistration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryType = event.params._queryType
  entity._owner = event.params._owner
  entity._expirationTime = event.params._expirationTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryType = event.params._queryType
  entity._owner = event.params._owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistrationExtended(
  event: RegistrationExtendedEvent
): void {
  let entity = new RegistrationExtended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryType = event.params._queryType
  entity._expirationTime = event.params._expirationTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTellorAddressUpdated(
  event: TellorAddressUpdatedEvent
): void {
  let entity = new TellorAddressUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tellorAddress = event.params._tellorAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
