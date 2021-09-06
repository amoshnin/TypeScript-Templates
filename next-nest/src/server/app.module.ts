// # PLUGINS IMPORTS //
import { Module } from '@nestjs/common'

// # EXTRA IMPORTS //
import { Providers } from '~server/config'

/////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [Providers.GraphQLProvider],
})
export class AppModule {}
