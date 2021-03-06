import * as React from "react";
import {
    Callout,
    IButtonStyles,
    IContextualMenuProps,
    IStackStyles,
    IStackTokens,
    Label,
    Stack
} from "@fluentui/react";
import { useBoolean, useId } from "@uifabric/react-hooks";
import Localizer from "../../Localization/Localizer";
import { AdjustedIconButton } from "../ThemeAdjustedComponents/AdjustedIconButton";

interface IPropertyDescriptionProps {
    name: string;
    required: boolean;
    property: any;
    labelId: string;
    useParameter?: () => void;
    isParameterized?: boolean;
    setNewValue?: (newValue: string) => void;
}

export const PropertyDescription: React.FunctionComponent<IPropertyDescriptionProps> = (props) => {
    const { name, required, property, labelId, useParameter, isParameterized = false, setNewValue } = props;

    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const descriptionId: string = useId("description");
    const iconButtonId: string = useId("iconButton");

    const stackTokens: IStackTokens = {
        childrenGap: 4
    };
    const labelCalloutStackStyles: Partial<IStackStyles> = {
        root: { maxWidth: 300, padding: 10 }
    };
    const iconButtonStyles: Partial<IButtonStyles> = {
        root: { marginBottom: -3, height: 26, width: 26 },
        icon: { fontSize: 14 }
    };

    const clearValue = () => {
        if (setNewValue) {
            setNewValue("");
        }
    };

    const menuProps: IContextualMenuProps = {
        items: isParameterized
            ? [
                  {
                      key: "parameterize",
                      text: Localizer.l("propertyEditorOverflowMenuEditParameterText"),
                      onClick: useParameter
                  },
                  {
                      key: "clear",
                      text: Localizer.l("propertyEditorOverflowMenuRemoveParameterText"),
                      onClick: clearValue
                  }
              ]
            : [
                  {
                      key: "parameterize",
                      text: Localizer.l("propertyEditorOverflowMenuUseParameterText"),
                      onClick: useParameter
                  }
              ]
    };

    return (
        <>
            <Stack horizontal horizontalAlign="space-between" tokens={stackTokens}>
                <Stack horizontal verticalAlign="center" tokens={stackTokens}>
                    <Label
                        required={required}
                        id={labelId}
                        style={{
                            // Fabric adds a 12px padding to the required *
                            marginRight: required ? -12 : 0
                        }}
                    >
                        {name}
                    </Label>
                    <AdjustedIconButton
                        id={iconButtonId}
                        iconProps={{ iconName: "Info" }}
                        title={Localizer.l("propertyEditorInfoButtonTitle")}
                        ariaLabel={Localizer.l("propertyEditorInfoButtonAriaLabel")}
                        onClick={toggleIsCalloutVisible}
                        styles={iconButtonStyles}
                    />
                </Stack>
                {useParameter && (
                    <AdjustedIconButton
                        iconProps={{ iconName: "More" }}
                        title={Localizer.l("propertyEditorOverflowMenuTitle")}
                        ariaLabel={Localizer.l("propertyEditorOverflowMenuAriaLabel")}
                        menuProps={menuProps}
                        onRenderMenuIcon={() => null}
                    />
                )}
            </Stack>
            {isCalloutVisible && (
                <Callout
                    target={"#" + iconButtonId}
                    setInitialFocus
                    onDismiss={toggleIsCalloutVisible}
                    ariaDescribedBy={descriptionId}
                    role="alertdialog"
                    styles={labelCalloutStackStyles}
                    id={descriptionId}
                >
                    {Localizer.getLocalizedStrings(property.localizationKey).description}
                </Callout>
            )}
        </>
    );
};
