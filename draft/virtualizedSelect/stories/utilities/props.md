### Virtualized Select Props

| value       | required | description                                                                        |
| ----------- | -------- | ---------------------------------------------------------------------------------- |
| isDisabled  | no       | bool value that disables select element                                            |
| isRequired  | no       | bool value that when enabled add red required border to select                     |
| onChange    | yes      | function called when selection changes                                             |
| options     | yes      | list of options for select                                                         |
| placeholder | no       | string to display inside select when no current selection; defaults to `Select...` |
| value       | no       | object that matches the `Option` object that is selected                           |

### Option Props

| value    | required | description                              |
| -------- | -------- | ---------------------------------------- |
| label    | yes      | string displayed in drop down            |
| subtitle | no       | string displayed as subtext in drop down |
| value    | yes      | identifier for option                    |
