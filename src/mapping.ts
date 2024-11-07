import {
  Sync as SyncEvent,
} from '../generated/PoolPrice/PoolPrice';
import {
  Sync,
} from '../generated/schema';


export function handleSync(event: SyncEvent): void {
  let entity = new Sync(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.reserve0 = event.params.reserve0;
  entity.reserve1 = event.params.reserve1;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
