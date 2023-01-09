import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhjVFpGaVldX2NLfUNyT2ZbdVxxZDU7a15RRnVfQ11kSHhWcUFmWXladQ==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmVWfFN0RnNddVtyfldHcDwsT3RfQF5jSH5Ud0NmXntbcHNSQw==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xPYVF2R2BJe1R1dl9EYUwxOX1dQl9gSX9TcURlXHhadXRcQGU=;ODk1NzUxQDMyMzAyZTM0MmUzMEZJZ2QzaTROeUtIS09YZWZYODBHQllXYWtLZ2NBQ2J6eEFON3ExZ3ZYbGs9;ODk1NzUyQDMyMzAyZTM0MmUzMFptT1FOZCtHMDdNYjdzQ3ZBT2lSSDlMZENoTW43Snd5UUNwNVFxOXZCU0k9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWeEx0RWFab1p6cVdMYl1BJAtUQF1hSn5SdkJiX3pZdHFUQ2NZ;ODk1NzU0QDMyMzAyZTM0MmUzMGQ3TUt1ZUg4ekZCd1ozYUZCMHU1T04yYjN0Y2NzMVMyemxMNmtGSXk5MzQ9;ODk1NzU1QDMyMzAyZTM0MmUzMGVVU3o5K0dNVkZQTzJnL0lGbWJFWlIrWkpOMlYzSWp5ZmQ4RDRDdFMzMU09;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xPYVF2R2BJe1R1dl9EYUwxOX1dQl9gSX9TcURlXHhadXZVRWU=;ODk1NzU3QDMyMzAyZTM0MmUzMGdndUxaeEtsaXpwTmVCUEd0NjhGamFzNHVCLzUzdXJoV2FKVDk1cS9TcDA9;ODk1NzU4QDMyMzAyZTM0MmUzMEJDM0E0MEgvNEZ2TXJ5NHlocGM3SmtaWTBuU3RYMllKWEJSMVZ2Ym9ObTA9;ODk1NzU5QDMyMzAyZTM0MmUzMGQ3TUt1ZUg4ekZCd1ozYUZCMHU1T04yYjN0Y2NzMVMyemxMNmtGSXk5MzQ9"
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
