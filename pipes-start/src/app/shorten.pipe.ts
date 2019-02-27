import { PipeTransform, Pipe } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {

    if (value.length > limit) {
      return `${value.substr(0, 10)}..`;
    }
    return value;
  }
}