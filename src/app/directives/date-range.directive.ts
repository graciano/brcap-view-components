import { Directive, Input, ElementRef, Renderer } from "@angular/core";
declare var $: any;
@Directive({
  selector: "[dateRange]",
  host: {
    class: "input-daterange",
    "data-date-format": "dd/mm/yyyy"
  }
})
export class DateRangeDirective {
  $el: any;
  constructor(private el: ElementRef, private renderer: Renderer) {
    this.$el = $(el.nativeElement);
  }

  ngAfterViewInit() {
    $(document)
      .ready(function() {
        $(".input-daterange").datepicker({
          format: "dd/mm/yyyy",
          clearBtn: true
        });
      })
      .on("changeDate", event => {
        let inputEvent = new Event("input", { bubbles: true });
        this.renderer.invokeElementMethod(this.el.nativeElement, "dispatchEvent", [inputEvent]);
      });
  }
}
