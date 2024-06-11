import { useRouter } from 'next/navigation';
import { MegaMenu } from 'primereact/megamenu';
import { useEffect, useState } from 'react';
import ItemDialog from './dialog/item-dialog';
import EquipmentDialog from './dialog/equipment-dialog';
import ComponentDialog from './dialog/component-dialog';
import { LiaCutSolid } from 'react-icons/lia';
import { GrDocumentPdf } from 'react-icons/gr';
import { SiMicrosoftexcel } from 'react-icons/si';
import { MdOutlineQrCode2 } from 'react-icons/md';
import { SiWebcomponentsdotorg } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { SaveData, SaveDone } from '@/redux/action/action';

function AppMegaMenu() {
  const router = useRouter();
  const [visible, setVisible] = useState({
    item: false,
    equipment: false,
    component: false
  });

  // const [save, setSave] = useState<any>(false);
  const dispatch = useDispatch();
  const save = useSelector((state: any) => state.SaveReducer);
  const edit = useSelector((state: any) => state.SaveReducer);


  const items: any = [
    {
      label: '',
      icon: 'pi pi-save',
      className: '',
      disabled: save,
      command: () => {
        dispatch(SaveData())
      }
    },
    {
      label: '',
      icon: 'pi pi-file-edit',
      className: 'mr-8',
      disabled: edit,
      command: () => {
        dispatch(SaveData())
      }
    },
    {
      label: 'File',
      items: [
        [
          {
            label: 'Export',
            items: [
              {
                label: 'PDF',
                icon: (options: any) => <GrDocumentPdf {...options.iconProps} />
              },
              {
                label: 'Excel',
                icon: (options: any) => <SiMicrosoftexcel {...options.iconProps} />
              },
              {
                label: 'QR Code',
                icon: (options: any) => <MdOutlineQrCode2 {...options.iconProps} />
              }
            ]
          },
          {
            label: 'Import',
            items: [
              {
                label: 'Excel',
                icon: (options: any) => <SiMicrosoftexcel {...options.iconProps} />
              }
            ]
          }
        ]
      ]
    },
    {
      label: 'Home',
      items: [
        [
          {
            label: 'View',
            items: [
              {
                label: 'Asset Register',
                icon: 'pi pi-book',
                command: () => {
                  // Callback to run
                  router.push('/assets/asset-register', { scroll: false });
                }
              },
              {
                label: 'Risk Based Inspection',
                icon: 'pi pi-cog',
                command: () => {
                  // Callback to run
                  router.push('/calculation/risk-based-inspection', { scroll: false });
                }
              }
            ]
          },
          {
            label: 'Clipboard',
            items: [
              {
                label: 'Copy',
                icon: 'pi pi-copy',
                command: () => {}
              },
              {
                label: 'Paste',
                icon: 'pi pi-clone',
                command: () => {}
              },
              {
                label: 'Cut',
                icon: (options: any) => <LiaCutSolid {...options.iconProps} />,
                command: () => {}
              }
            ]
          }
        ]
      ]
    },
    {
      label: 'Create',
      items: [
        [
          {
            label: 'Assets',
            items: [
              {
                label: 'Item',
                icon: 'pi pi-box',
                command: () => {
                  setVisible((prev) => ({ ...prev, item: true }));
                }
              },
              {
                label: 'Equipment',
                icon: 'pi pi-wrench',
                command: () => {
                  setVisible((prev) => ({ ...prev, equipment: true }));
                }
              },
              {
                label: 'Component',
                icon: (options: any) => <SiWebcomponentsdotorg {...options.iconProps} />,
                command: () => {
                  setVisible((prev) => ({ ...prev, component: true }));
                }
              }
            ]
          }
        ]
      ]
    },
    {
      label: 'Tools',
      items: [
        [
          {
            label: 'Filter',
            items: [
              {
                label: 'Advanced Filter',
                icon: 'pi pi-filter'
              }
            ]
          }
        ]
      ]
    }
  ];

  return (
    <>
      <ItemDialog visible={visible.item} setVisible={setVisible} />
      <EquipmentDialog visible={visible.equipment} setVisible={setVisible} />
      <ComponentDialog visible={visible.component} setVisible={setVisible} />
      <MegaMenu model={items} breakpoint="960px" />
    </>
  );
}

export default AppMegaMenu;
