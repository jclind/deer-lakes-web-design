import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import { navLinks } from './navData'
import { Twirl as Hamburger } from 'hamburger-react'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavbarProps {
  currentPath: string
}

interface NavLink {
  title: string
  path?: string
  children?: NavLink[]
}

interface MobileNavProps {
  links: NavLink[]
}

const MobileNavItem: React.FC<{ item: NavLink; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.children) {
    return (
      <a
        href={item.path}
        className={styles.link}
        style={{ paddingLeft: `${1 + depth}rem` }}
      >
        {item.title}
      </a>
    )
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.accordionButton}
        style={{ paddingLeft: `${1 + depth}rem` }}
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.open : ''}`}
        />
      </button>

      {isOpen && (
        <div className={styles.accordionContent}>
          {item.children.map((child, idx) => (
            <MobileNavItem key={idx} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  return (
    <nav className={styles.mobileNav}>
      <div className={styles.menu}>
        {links.map((item, idx) => (
          <MobileNavItem key={idx} item={item} />
        ))}
      </div>
    </nav>
  )
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  // Track which top-level menu is hovered/open (for desktop)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  // Track which submenu inside top-level menu is open (for nested)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

  const handleMouseEnter = (title: string) => {
    setOpenMenu(title)
    setOpenSubMenu(null) // reset sub menu on top menu hover
  }

  const handleMouseLeave = () => {
    setOpenMenu(null)
    setOpenSubMenu(null)
  }

  const handleSubMenuEnter = (title: string) => {
    setOpenSubMenu(title)
  }

  const handleSubMenuLeave = () => {
    setOpenSubMenu(null)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.inner}>
        <a href='/' className={styles.logo}>
          <img
            src='/images/DLWD_logo_small.webp'
            alt='Deer Lakes Web Designs'
          />
        </a>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} label='Menu' />
        </div>
        {isOpen && <MobileNav links={navLinks} />}
        <nav className={`${styles.links} ${styles.desktopLinks}`}>
          {navLinks.map(link => {
            const hasChildren = !!link.children?.length
            const isMenuOpen = openMenu === link.title

            return (
              <div
                key={link.title}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(link.title)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.path || '#'}
                  className={`${styles.link} ${
                    currentPath === link.path ? styles.active : ''
                  }`}
                >
                  {link.title} {hasChildren && <ChevronDown size={16} />}
                </a>

                {/* First dropdown */}
                {hasChildren && (
                  <div
                    className={`${styles.dropdown} ${
                      isMenuOpen ? styles.open : ''
                    }`}
                  >
                    {link.children!.map(child => {
                      const hasSubChildren = !!child.children?.length
                      const isSubMenuOpen = openSubMenu === child.title

                      return (
                        <div
                          key={child.title}
                          className={styles.dropdownItem}
                          onMouseEnter={() =>
                            hasSubChildren && handleSubMenuEnter(child.title)
                          }
                          onMouseLeave={handleSubMenuLeave}
                        >
                          <a
                            href={child.path || '#'}
                            className={styles.dropdownLink}
                          >
                            {child.title}{' '}
                            {hasSubChildren && <ChevronDown size={12} />}
                          </a>

                          {/* Second dropdown */}
                          {hasSubChildren && (
                            <div
                              className={`${styles.dropdownRight} ${
                                isSubMenuOpen ? styles.open : ''
                              }`}
                            >
                              {child.children!.map(grandchild => (
                                <a
                                  key={grandchild.title}
                                  href={grandchild.path}
                                  className={styles.dropdownLink}
                                >
                                  {grandchild.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
