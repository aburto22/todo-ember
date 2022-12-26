import { modifier } from 'ember-modifier';

interface AutofocusSignature {
  Element: HTMLElement;
  Args: {
    Positional: unknown[];
  };
}

const autofocus = modifier<AutofocusSignature>((element) => {
  element.focus();
});

export default autofocus;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    autofocus: typeof autofocus;
  }
}
